(function () {
  'use strict';

  var LABELS = {
    en: { copy: 'Copy code', copied: 'Copied', failed: 'Copy failed', toast: 'Copied to clipboard' },
    es: { copy: 'Copiar código', copied: 'Copiado', failed: 'No se pudo copiar', toast: 'Copiado al portapapeles' },
    jp: { copy: 'コードをコピー', copied: 'コピーしました', failed: 'コピーできませんでした', toast: 'クリップボードにコピーしました' },
    'pt-PT': { copy: 'Copiar código', copied: 'Copiado', failed: 'Falha ao copiar', toast: 'Copiado para a área de transferência' },
    zh: { copy: '复制代码', copied: '已复制', failed: '复制失败', toast: '已复制到剪贴板' }
  };

  var COPY_ICON = '<svg class="code-block__copy-icon code-block__copy-icon--default" viewBox="0 0 20 20" aria-hidden="true"><path d="M12.7373 4.79002C12.5253 3.42297 11.5409 2.5 10.0574 2.5H5.24522C3.56997 2.5 2.51758 3.6899 2.51758 5.37081V9.90308C2.51758 11.4344 3.39282 12.5628 4.82782 12.7408" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.755 7.23306H9.94441C8.26837 7.23306 7.2168 8.41974 7.2168 10.0998V14.6322C7.2168 16.3122 8.26271 17.4989 9.94441 17.4989H14.7542C16.4367 17.4989 17.4827 16.3122 17.4827 14.6322V10.0998C17.4827 8.41974 16.4367 7.23306 14.755 7.23306Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var SUCCESS_ICON = '<svg class="code-block__copy-icon code-block__copy-icon--success" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9712 5.57174C13.0909 5.57174 13.1879 5.47474 13.1879 5.35508C13.1879 3.39674 11.9296 2.08008 10.0462 2.08008H5.23789C3.35456 2.08008 2.08789 3.39674 2.08789 5.35508V9.88842C2.08789 11.8551 3.35456 13.1718 5.23789 13.1718H5.31289C5.45097 13.1718 5.56289 13.0598 5.56289 12.9218V10.1051C5.56289 7.48007 7.41289 5.57174 9.95458 5.57174H12.9712Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7675 6.82149H9.95668C8.07583 6.82149 6.8125 8.14149 6.8125 10.1048V14.6373C6.8125 16.6007 8.07583 17.9207 9.95668 17.9207H14.7667C16.6475 17.9207 17.9117 16.6007 17.9117 14.6373V10.1048C17.9117 8.14149 16.6484 6.82149 14.7675 6.82149Z" fill="currentColor"/></svg>';
  var TOAST_ICON = '<svg class="code-copy-toast__icon" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9712 5.57174C13.0909 5.57174 13.1879 5.47474 13.1879 5.35508C13.1879 3.39674 11.9296 2.08008 10.0462 2.08008H5.23789C3.35456 2.08008 2.08789 3.39674 2.08789 5.35508V9.88842C2.08789 11.8551 3.35456 13.1718 5.23789 13.1718H5.31289C5.45097 13.1718 5.56289 13.0598 5.56289 12.9218V10.1051C5.56289 7.48007 7.41289 5.57174 9.95458 5.57174H12.9712Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7675 6.82149H9.95668C8.07583 6.82149 6.8125 8.14149 6.8125 10.1048V14.6373C6.8125 16.6007 8.07583 17.9207 9.95668 17.9207H14.7667C16.6475 17.9207 17.9117 16.6007 17.9117 14.6373V10.1048C17.9117 8.14149 16.6484 6.82149 14.7675 6.82149Z" fill="currentColor"/></svg>';
  var toastElement;
  var toastTimer;

  function getLabels() {
    var language = document.documentElement.getAttribute('lang') || 'en';
    return LABELS[language] || LABELS[language.split('-')[0]] || LABELS.en;
  }

  function getCodeText(block) {
    var lines = block.querySelectorAll('td.code .line');
    if (lines.length) {
      return Array.prototype.map.call(lines, function (line) {
        return line.textContent;
      }).join('\n').replace(/\n+$/, '');
    }

    var code = block.querySelector('pre code');
    var pre = block.querySelector('pre');
    return ((code || pre) ? (code || pre).textContent : '').replace(/\n$/, '');
  }

  function legacyCopy(text) {
    var input = document.createElement('textarea');
    input.value = text;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.top = '0';
    input.style.left = '-9999px';
    input.style.fontSize = '16px';
    document.body.appendChild(input);
    input.focus();
    input.select();
    input.setSelectionRange(0, input.value.length);

    var copied = false;
    try {
      copied = document.execCommand('copy');
    } catch (error) {
      copied = false;
    }

    document.body.removeChild(input);
    return copied;
  }

  function copyText(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      return navigator.clipboard.writeText(text).catch(function () {
        if (legacyCopy(text)) return;
        throw new Error('Copy command failed');
      });
    }

    if (legacyCopy(text)) return Promise.resolve();
    return Promise.reject(new Error('Clipboard API unavailable'));
  }

  function reflect(button, status, label, copied) {
    button.classList.toggle('is-copied', copied);
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    status.textContent = label;
  }

  function showToast(label) {
    if (!toastElement) {
      toastElement = document.createElement('div');
      toastElement.className = 'code-copy-toast';
      toastElement.setAttribute('aria-hidden', 'true');
      toastElement.innerHTML = TOAST_ICON + '<span class="code-copy-toast__label"></span>';
      document.body.appendChild(toastElement);
    }

    toastElement.querySelector('.code-copy-toast__label').textContent = label;
    window.clearTimeout(toastTimer);
    window.requestAnimationFrame(function () {
      toastElement.classList.add('is-visible');
    });
    toastTimer = window.setTimeout(function () {
      toastElement.classList.remove('is-visible');
    }, 1800);
  }

  function enhance(block, labels) {
    if (block.getAttribute('data-copy-ready') === 'true') return;

    var button = document.createElement('button');
    var status = document.createElement('span');
    button.className = 'code-block__copy';
    button.type = 'button';
    button.setAttribute('aria-label', labels.copy);
    button.setAttribute('title', labels.copy);
    button.innerHTML = COPY_ICON + SUCCESS_ICON;
    status.className = 'code-block__status';
    status.setAttribute('aria-live', 'polite');
    button.appendChild(status);
    block.appendChild(button);
    block.setAttribute('data-copy-ready', 'true');

    button.addEventListener('click', function () {
      copyText(getCodeText(block)).then(function () {
        reflect(button, status, labels.copied, true);
        showToast(labels.toast);
        window.clearTimeout(button.copyResetTimer);
        button.copyResetTimer = window.setTimeout(function () {
          reflect(button, status, labels.copy, false);
        }, 3000);
      }).catch(function () {
        reflect(button, status, labels.failed, false);
        window.clearTimeout(button.copyResetTimer);
        button.copyResetTimer = window.setTimeout(function () {
          reflect(button, status, labels.copy, false);
        }, 3000);
      });
    });
  }

  function init() {
    var labels = getLabels();
    var blocks = document.querySelectorAll('.doc-article__body .code-block');
    Array.prototype.forEach.call(blocks, function (block) {
      enhance(block, labels);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());

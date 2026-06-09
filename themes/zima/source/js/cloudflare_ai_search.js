(function() {
  'use strict';

  var SNIPPET_SRC = 'https://3af1f559-5c4f-4e98-9987-06be362053d1.search.ai.cloudflare.com/assets/v0.0.39/search-snippet.es.js';
  var API_URL = 'https://3af1f559-5c4f-4e98-9987-06be362053d1.search.ai.cloudflare.com';
  var ELEMENT_ID = 'zima-cloudflare-ai-search';

  var translations = {
    en: {
      placeholder: 'Search...',
      chatPlaceholder: 'Type a message...',
      searchButtonLabel: 'Search',
      sendButtonLabel: 'Send',
      emptyStateTitle: 'Start Searching',
      emptyStateDescription: 'Enter a query to search for results',
      noResultsTitle: 'No Results Found',
      noResultsDescription: 'No results found for "{query}"',
      resultsCount: 'Found {n} result',
      resultsCountPlural: 'Found {n} results',
      resultsCountOverflow: 'Showing {n} of {total} results',
      errorPrefix: 'Error:',
      missingApiUrlError: 'The api-url attribute is required.',
      poweredBy: 'Powered by',
      poweredByLinkLabel: 'Cloudflare AI Search',
      loadingMessages: [
        'Searching the docs...',
        'Finding the best answer...',
        'Reading relevant pages...',
        'Checking the knowledge base...',
        'Gathering useful context...',
        'Connecting the dots...',
        'Reviewing matching content...',
        'Preparing a response...',
        'Almost there...',
        'Finishing up...'
      ],
      chatTitle: 'AI Search',
      chatEmptyTitle: 'Ask about ZimaSpace',
      chatEmptyDescription: 'Quickly find products, docs, support, and more...',
      historyTitle: 'History',
      newChatButton: 'New Chat',
      clearChatButton: 'Clear Chat',
      yesterday: 'Yesterday',
      navigateHint: 'Navigate',
      selectHint: 'Select',
      closeHint: 'Close'
    },
    zh: {
      placeholder: '搜索...',
      chatPlaceholder: '输入消息...',
      searchButtonLabel: '搜索',
      sendButtonLabel: '发送',
      emptyStateTitle: '开始搜索',
      emptyStateDescription: '输入问题以搜索相关结果',
      noResultsTitle: '未找到结果',
      noResultsDescription: '未找到与 "{query}" 相关的结果',
      resultsCount: '找到 {n} 条结果',
      resultsCountPlural: '找到 {n} 条结果',
      resultsCountOverflow: '显示 {total} 条结果中的 {n} 条',
      errorPrefix: '错误：',
      missingApiUrlError: '必须提供 api-url 属性。',
      poweredBy: '技术支持',
      poweredByLinkLabel: 'Cloudflare AI Search',
      loadingMessages: [
        '正在搜索文档...',
        '正在寻找最佳答案...',
        '正在阅读相关页面...',
        '正在检查知识库...',
        '正在整理有用信息...',
        '正在关联上下文...',
        '正在核对匹配内容...',
        '正在准备回复...',
        '快好了...',
        '正在完成...'
      ],
      chatTitle: 'AI 搜索',
      chatEmptyTitle: '询问 ZimaSpace',
      chatEmptyDescription: '快速查找产品、文档、支持等更多内容。',
      historyTitle: '历史记录',
      newChatButton: '新对话',
      clearChatButton: '清空对话',
      yesterday: '昨天',
      navigateHint: '导航',
      selectHint: '选择',
      closeHint: '关闭'
    },
    jp: {
      placeholder: '検索...',
      chatPlaceholder: 'メッセージを入力...',
      searchButtonLabel: '検索',
      sendButtonLabel: '送信',
      emptyStateTitle: '検索を開始',
      emptyStateDescription: '検索したい内容を入力してください',
      noResultsTitle: '結果が見つかりません',
      noResultsDescription: '"{query}" に一致する結果はありません',
      resultsCount: '{n} 件の結果が見つかりました',
      resultsCountPlural: '{n} 件の結果が見つかりました',
      resultsCountOverflow: '{total} 件中 {n} 件を表示',
      errorPrefix: 'エラー:',
      missingApiUrlError: 'api-url 属性が必要です。',
      poweredBy: 'Powered by',
      poweredByLinkLabel: 'Cloudflare AI Search',
      loadingMessages: [
        'ドキュメントを検索しています...',
        '最適な回答を探しています...',
        '関連ページを確認しています...',
        'ナレッジベースを確認しています...',
        '役立つ情報を集めています...',
        '文脈を整理しています...',
        '一致する内容を確認しています...',
        '回答を準備しています...',
        'もう少しです...',
        '仕上げています...'
      ],
      chatTitle: 'AI Search',
      chatEmptyTitle: 'ZimaSpace について質問',
      chatEmptyDescription: '製品、ドキュメント、サポートなどをすばやく検索できます。',
      historyTitle: '履歴',
      newChatButton: '新しいチャット',
      clearChatButton: 'チャットをクリア',
      yesterday: '昨日',
      navigateHint: '移動',
      selectHint: '選択',
      closeHint: '閉じる'
    },
    es: {
      placeholder: 'Buscar...',
      chatPlaceholder: 'Escribe un mensaje...',
      searchButtonLabel: 'Buscar',
      sendButtonLabel: 'Enviar',
      emptyStateTitle: 'Empieza a buscar',
      emptyStateDescription: 'Introduce una consulta para buscar resultados',
      noResultsTitle: 'No se encontraron resultados',
      noResultsDescription: 'No se encontraron resultados para "{query}"',
      resultsCount: 'Se encontro {n} resultado',
      resultsCountPlural: 'Se encontraron {n} resultados',
      resultsCountOverflow: 'Mostrando {n} de {total} resultados',
      errorPrefix: 'Error:',
      missingApiUrlError: 'El atributo api-url es obligatorio.',
      poweredBy: 'Con tecnologia de',
      poweredByLinkLabel: 'Cloudflare AI Search',
      loadingMessages: [
        'Buscando en la documentacion...',
        'Encontrando la mejor respuesta...',
        'Leyendo paginas relevantes...',
        'Comprobando la base de conocimiento...',
        'Reuniendo contexto util...',
        'Conectando la informacion...',
        'Revisando contenido coincidente...',
        'Preparando una respuesta...',
        'Ya casi esta...',
        'Terminando...'
      ],
      chatTitle: 'AI Search',
      chatEmptyTitle: 'Pregunta sobre ZimaSpace',
      chatEmptyDescription: 'Encuentra rapidamente productos, documentos, soporte y mucho mas.',
      historyTitle: 'Historial',
      newChatButton: 'Nuevo chat',
      clearChatButton: 'Borrar chat',
      yesterday: 'Ayer',
      navigateHint: 'Navegar',
      selectHint: 'Seleccionar',
      closeHint: 'Cerrar'
    },
    pt: {
      placeholder: 'Pesquisar...',
      chatPlaceholder: 'Digite uma mensagem...',
      searchButtonLabel: 'Pesquisar',
      sendButtonLabel: 'Enviar',
      emptyStateTitle: 'Comece a pesquisar',
      emptyStateDescription: 'Insira uma consulta para procurar resultados',
      noResultsTitle: 'Nenhum resultado encontrado',
      noResultsDescription: 'Nenhum resultado encontrado para "{query}"',
      resultsCount: '{n} resultado encontrado',
      resultsCountPlural: '{n} resultados encontrados',
      resultsCountOverflow: 'A mostrar {n} de {total} resultados',
      errorPrefix: 'Erro:',
      missingApiUrlError: 'O atributo api-url e obrigatorio.',
      poweredBy: 'Com tecnologia de',
      poweredByLinkLabel: 'Cloudflare AI Search',
      loadingMessages: [
        'A pesquisar na documentacao...',
        'A encontrar a melhor resposta...',
        'A ler paginas relevantes...',
        'A verificar a base de conhecimento...',
        'A reunir contexto util...',
        'A ligar informacoes...',
        'A rever conteudo correspondente...',
        'A preparar uma resposta...',
        'Quase pronto...',
        'A finalizar...'
      ],
      chatTitle: 'AI Search',
      chatEmptyTitle: 'Pergunte sobre ZimaSpace',
      chatEmptyDescription: 'Encontre rapidamente produtos, docs, suporte e muito mais.',
      historyTitle: 'Historico',
      newChatButton: 'Novo chat',
      clearChatButton: 'Limpar chat',
      yesterday: 'Ontem',
      navigateHint: 'Navegar',
      selectHint: 'Selecionar',
      closeHint: 'Fechar'
    }
  };

  function getCurrentLocale() {
    var pathSegments = window.location.pathname.split('/').filter(Boolean);
    var documentLanguage = document.documentElement.lang || '';
    var fallbackLanguage = normalizeLanguage(documentLanguage || navigator.language || 'en');
    var language,
      index;

    for (index = 0; index < pathSegments.length; index += 1) {
      language = normalizeLanguage(pathSegments[index]);
      if (Object.prototype.hasOwnProperty.call(translations, language)) {
        return language;
      }
    }

    return Object.prototype.hasOwnProperty.call(translations, fallbackLanguage) ? fallbackLanguage : 'en';
  }

  function normalizeLanguage(value) {
    var language = String(value || 'en').toLowerCase().replace('_', '-').split('-')[0];
    return language === 'ja' ? 'jp' : language;
  }

  function getCurrentTranslations() {
    return translations[getCurrentLocale()] || translations.en;
  }

  function syncLanguage(element) {
    var currentTranslations = getCurrentTranslations();
    var currentLocale = getCurrentLocale();

    element.setAttribute('lang', currentLocale);
    element.setAttribute('translations', JSON.stringify(currentTranslations));
    element.translations = currentTranslations;
  }

  function injectDesktopWindowStyle(element) {
    if (!element || !element.shadowRoot || element.shadowRoot.querySelector('#zima-chat-window-style')) {
      return;
    }

    var style = document.createElement('style');
    style.id = 'zima-chat-window-style';
    style.textContent = [
      '@media (min-width: 481px) {',
      '  .chat-window {',
      '    width: min(520px, calc(100vw - 40px));',
      '  }',
      '}'
    ].join('\n');
    element.shadowRoot.appendChild(style);
  }

  function createSearchBubble() {
    var existingElement = document.getElementById(ELEMENT_ID);
    if (existingElement) {
      syncLanguage(existingElement);
      requestAnimationFrame(function() {
        injectDesktopWindowStyle(existingElement);
      });
      return existingElement;
    }

    var element = document.createElement('chat-bubble-snippet');
    element.id = ELEMENT_ID;
    element.className = 'cloudflare-ai-search';
    element.setAttribute('api-url', API_URL);
    element.setAttribute('hide-branding', 'true');
    element.style.setProperty('--search-snippet-primary-color', '#ffaa00');
    element.style.setProperty('--search-snippet-primary-hover', '#e69900');
    element.style.setProperty('--search-snippet-focus-ring', 'rgba(255, 170, 0, 0.35)');
    element.style.setProperty('--chat-bubble-button-bottom', 'calc(6rem + env(safe-area-inset-bottom))');
    element.style.setProperty('--chat-bubble-button-right', '2rem');

    syncLanguage(element);
    document.body.appendChild(element);

    requestAnimationFrame(function() {
      injectDesktopWindowStyle(element);
    });

    return element;
  }

  function initSearchBubble() {
    if (!window.customElements) {
      return;
    }

    customElements.whenDefined('chat-bubble-snippet').then(function() {
      createSearchBubble();
    });
  }

  function loadSnippet() {
    if (document.querySelector('script[src="' + SNIPPET_SRC + '"]')) {
      initSearchBubble();
      return;
    }

    var script = document.createElement('script');
    script.type = 'module';
    script.src = SNIPPET_SRC;
    script.async = true;
    script.addEventListener('load', initSearchBubble);
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSnippet);
  } else {
    loadSnippet();
  }
}());

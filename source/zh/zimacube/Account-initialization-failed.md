---
title: 文章标题
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## 修复 “账户初始化失败” 错误：快速指南  

---

### **选项 1: 重新安装 ZimaOS**  
**所需工具**:  
- 空白 USB 驱动器 (≥4GB)  
- 键盘  

**步骤**:  
- 请按照 [此链接](/zimacube/How-to-Install-ZimaOS) 完成安装。

---

### **选项 2: 命令行修复**  
**所需工具**:  
- HDMI/DP/Type-C 显示器
- 键盘  
  

**步骤**:  
1. **登录命令行模式**  
   - 连接显示器 > 按 Alt+F2 > 输入 `root` 登录命令行模式

2. **修复系统文件**:  
   - 运行
```language
cat /etc/release.yaml
```

   - 运行
```language
rm -rf /var/lib/casaos/db/user.db && systemctl restart zimaos-user 
```
   - 完成！现在可以尝试再次登录 zimaos

感谢您的支持！
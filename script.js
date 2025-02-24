// 获取页面中的 p 元素
const paragraph = document.querySelector('p');

// 为整个文档添加点击和触摸开始事件监听器
document.addEventListener('click', function (event) {
    // 检查点击事件是否发生在 p 元素之外（即空白处）
    if (!paragraph.contains(event.target)) {
        // 如果是空白处，将 p 元素的文本内容改为“楠楠帮我”
        paragraph.textContent = '楠楠帮我~';
    }
});

document.addEventListener('touchstart', function (event) {
    // 检查触摸开始事件是否发生在 p 元素之外（即空白处）
    if (!paragraph.contains(event.target)) {
        // 如果是空白处，将 p 元素的文本内容改为“楠楠帮我”
        paragraph.textContent = '楠楠帮我~';
    }
});
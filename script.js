// 获取页面中的 p 元素
const paragraph = document.querySelector('p');
// 保存初始文本内容
const initialText = paragraph.textContent;
// 用于记录当前文字是否已经改变的状态
let isTextChanged = false;

function handleClickOrTouch(event) {
    if (!paragraph.contains(event.target)) {
        toggleText();
    }
}

function handleKeyPress(event) {
    // 检查按下的键是否是空格键（keyCode 为 32 或 key 为 ' '）
    if (event.key === ' ' || event.keyCode === 32) {
        toggleText();
    }
}

function toggleText() {
    if (isTextChanged) {
        // 如果文字已经改变，将其恢复为初始文本
        paragraph.textContent = initialText;
    } else {
        // 如果文字未改变，将其修改为新的文本
        paragraph.textContent = 'with楠楠~';
    }
    // 切换文字状态
    isTextChanged = !isTextChanged;
}

// 监听鼠标点击和触摸事件
document.addEventListener('click', handleClickOrTouch);
document.addEventListener('touchstart', handleClickOrTouch);
// 监听键盘按键事件
document.addEventListener('keydown', handleKeyPress);

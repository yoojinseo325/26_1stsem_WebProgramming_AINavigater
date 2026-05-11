// 초기 댓글 데이터
let comments = [
    { id: 1, text: "자료조사할때 도움이 많이 되었습니다", date: "2026-05-10" },
    { id: 2, text: "AI 설명이 정말 이해하기 쉽게 잘 정리되어 있네요!", date: "2026-05-09" }
];

// DOM 요소
const commentsList = document.getElementById('commentsList');
const commentInput = document.getElementById('commentInput');
const commentSubmit = document.getElementById('commentSubmit');

// 댓글 렌더링 함수
function renderComments() {
    commentsList.innerHTML = comments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">익명</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
        </div>
    `).join('');
}

// 댓글 추가 함수
function addComment() {
    const text = commentInput.value.trim();
    if (text) {
        const newComment = {
            id: comments.length + 1,
            text: text,
            date: new Date().toISOString().split('T')[0]
        };
        comments.push(newComment);
        commentInput.value = '';
        renderComments();
    }
}

// 이벤트 리스너
commentSubmit.addEventListener('click', addComment);
commentInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addComment();
    }
});

// 초기 렌더링
renderComments();

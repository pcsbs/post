// 게시물 수정 함수
function editPost(index) {
    const updatedTitle = prompt("수정된 제목을 입력하세요:", posts[index].title);
    const updatedContent = prompt("수정된 내용을 입력하세요:", posts[index].content);

    if (updatedTitle !== null && updatedContent !== null) {
        posts[index].title = updatedTitle;
        posts[index].content = updatedContent;
        displayPosts();
    }
}

// 게시물 목록을 화면에 표시하는 함수
function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const li = document.createElement('li');
        const date = new Date();
        li.innerHTML = `
            <div id = "posting">
                <div id = "name_contents" style = "height:50px">
                    <div style="float:left;width:29.6%;padding:10px;">
                        <button style="background-color: white;border: none;" id="look_content" onclick="contents_look()"><strong>${posts[i].title}</strong></butoon>
                    </div>
                    <div style="text-align: center;">
                        <p>${date.toLocaleString()}</p>
                    </div>
                    <div style="float:right;">
                        <p>${posts[i].maker}</p>
                    </div>
                    <div id="contents" style="float:left;width:100%;border:1px solid black;display: none;">
                        <p>${posts[i].content}</p>
                    </div>

                </div>
                <button onclick="editPost(${i})">수정</button>
                <button onclick="deletePost(${i})">삭제</button>
            </div>
        `;
        postList.appendChild(li);
    }
}
function contents_look(){
    const look_content = document.getElementById('look_content');
    const content = document.getElementById('contents');
    
// 버튼 클릭 이벤트 리스너를 추가합니다.
look_content.addEventListener('click', function() {
    // div의 현재 스타일(display) 값을 가져옵니다.
    const currentDisplayStyle_contents = window.getComputedStyle(contents).display;
    if (currentDisplayStyle_contents === 'none') {
        contents.style.display = 'block';                
    } else {
        contents.style.display = 'none';
    }
});
}
// 입력 필드 초기화 함수
function clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById("maker").value = '';
}

// 초기 게시물 목록 표시
displayPosts();
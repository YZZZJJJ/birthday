function checklogin(event) {
            event.preventDefault(); 
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            if(username !== "孔维嘉颖" ){
                alert("用户名不正确");  
                return
            }
            else if( password !== "20051110"){
                alert("密码不正确");
                return
            }else{
                alert("登录成功");
                window.location.href = "http://www.baidu.com" 
}
function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    document.body.appendChild(firework);

    firework.addEventListener('animationend', () => {
        firework.remove();
        createFragments(x, y);
    });
}

function createFragments(x, y) {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];
    for (let i = 0; i < 50; i++) {
        const fragment = document.createElement('div');
        fragment.classList.add('fragment');
        fragment.style.left = `${x}px`;
        fragment.style.top = `${y}px`;
        fragment.style.transform = `translate(-5px, -5px) rotate(${Math.random() * 360}deg)`;
        fragment.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(fragment);

        const duration = Math.random() * 1 + 0.5;
        const delay = Math.random() * 0.5;
        fragment.style.animationDuration = `${duration}s`;
        fragment.style.animationDelay = `${delay}s`;

        fragment.addEventListener('animationend', () => {
            fragment.remove();
        });
    }
}

document.addEventListener('click', (event) => {
    createFirework(event.clientX, event.clientY);
});

document.addEventListener('DOMContentLoaded', function() {
    // 添加搜索功能
    addSearchFunctionality();
    // 添加展开功能
    addExpandFunctionality();
    // 添加切换主题功能
    addThemeToggleFunctionality();

    function addSearchFunctionality() {
        // 搜索功能网页
        const searchFunction = document.getElementById('searchFunction');
        if (searchFunction) {
            const functionListItems = document.getElementById('functionList').getElementsByTagName('li');
            searchFunction.addEventListener('keyup', function() {
                const filter = searchFunction.value.toLowerCase();
                for (let i = 0; i < functionListItems.length; i++) {
                    const a = functionListItems[i].getElementsByTagName('a')[0];
                    const textValue = a.textContent || a.innerText;
                    if (textValue.toLowerCase().indexOf(filter) > -1) {
                        functionListItems[i].style.display = "";
                    } else {
                        functionListItems[i].style.display = "none";
                    }
                }
            });
        }

        // 搜索网址
        const searchNav = document.getElementById('searchNav');
        if (searchNav) {
            const navListItems = document.getElementById('navList').getElementsByTagName('li');
            searchNav.addEventListener('keyup', function() {
                const filter = searchNav.value.toLowerCase();
                for (let i = 0; i < navListItems.length; i++) {
                    const a = navListItems[i].getElementsByTagName('a')[0];
                    const textValue = a.textContent || a.innerText;
                    if (textValue.toLowerCase().indexOf(filter) > -1) {
                        navListItems[i].style.display = "";
                    } else {
                        navListItems[i].style.display = "none";
                    }
                }
            });
        }
    }

    function addExpandFunctionality() {
        const expandButtons = document.getElementsByClassName('expand-btn');
        for (let i = 0; i < expandButtons.length; i++) {
            expandButtons[i].addEventListener('click', function() {
                const content = this.nextElementSibling;
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                    this.textContent = '折叠';
                } else {
                    content.style.display = 'none';
                    this.textContent = '展开';
                }
            });
        }
    }

    function addThemeToggleFunctionality() {
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        themeToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
        });
    }
});

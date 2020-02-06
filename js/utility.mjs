// exportテスト
export function modalOpen(idName) {
    document.getElementById(idName).addEventListener("click", function(){
        console.log("hello");
    }, false);
}

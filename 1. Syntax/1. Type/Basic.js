
// 주석(comment)
// 어떻게 하면 프로그래밍을 잘하는가 가 아닌
// 프로그래밍을 어떻게 하는가.
// 중복을 제거하면 좋은 프로그램이 된다.
// 중복을 제거하면 좋은 일이 생긴다!

// 변수
var a = 1;        // var은 붙이도록!
console.log(a);
var b = '2';
console.log(a+b);   // 12 출력이 됨!!
console.log(b+a);   // 21

// 변수를 사용한 폭발적인 효과.
// name이 1000개다. 근데 아래 단 한줄로 싹다 바꿀 수 있게 되었다!!
var name = 'hyukJung';
var letter = 'Dear '+name+', Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '+name+' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu '+name+'  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id hyuk est laborum '+name+'.';
console.log(letter);

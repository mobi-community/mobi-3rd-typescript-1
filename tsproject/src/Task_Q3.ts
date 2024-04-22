// type alias
// 새로운 타입 이름을 정의한다.
// 기존 타입을 참조하거나 유니온, 튜플 등 복잡한 객체를 정의하는 데 사용할 수 있다.
// 다양한 타입 조합을 사용할 수 있다.
// 'type'은 확장이 불가능, 한 번 정의된 후 추가적인 속성을 더할 수 없다.
type User = {
    name: string;
    age: number;
};
// union
type union = "close" | "open" | "resize";

// tuple
type tuple = [number, number];

// interface
// 타입 체크를 위해 객체의 구조를 정의하는데 사용된다.
// 확장이 가능하여, 같은 이름의 'interface'를 여러 번 선언하면 자동으로 합쳐진다.

// 객체의 구조를 정의하는데 특화되어 있다
// 확장 가능하여, 기존 인터페이스에 추가적인 속성을 쉽게 더할 수 있다.
// 같은 이름의 인터페이스를 여러번 선언하면 자동으로 합쳐진다(선언병합)
interface User {
    name: string;
    age: number;
}
interface test extends User {
    location: string;
}
interface User {
    email: string;
}

// 차이점
// type alias는 다양한 조합으로 사용가능하나 확장이 불가능하고
// interface는 확장이 가능하며, 선언 병합이 가능하다

// 상황마다 다르겠지만 interface를 사용하는게 더 나아보인다

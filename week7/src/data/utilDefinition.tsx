import AsConst from "../utilType/asConst";
import Enum from "../utilType/enum";
import Extract from "../utilType/extract";
import Generic from "../utilType/generic";
import Omit from "../utilType/omit";
import Optional from "../utilType/optional";
import Partial from "../utilType/partial";
import Pick from "../utilType/pick";
import Record from "../utilType/record";
import ReturnType from "../utilType/returnType";
import Satisfies from "../utilType/satisfies";

interface Arrangement {
    id: number;
    title: string;
    content: string;
    component: React.ReactElement;
}

export const UtilDefinition: Array<Arrangement> = [
    {
        id: 21,
        title: "Enum",
        content: ` TypeScript에서 'enum'(열거형)은 특정 값들의 집합을 명명된 상수로 정의할 때 사용된다
            코드의 가독성과 유지보수성을 높일 수 있다`,
        component: <Enum />,
    },
    {
        id: 22,
        title: "As const",
        content: `
        TypeScript에서 'as const'는 특정 값들이나 객체의 프로퍼티가 변하지 않도록
        "상수"로 표시하는 방법이다.
        해당 값들을 리터럴 타입으로 추론하며, 이러한 리터럴 타입은 더욱 구체적이고 제한적인 타입을 가진다
        컴파일러가 더 엄격한 타입 검사를 수행하도록 할 수 있다.
        `,
        component: <AsConst />,
    },
    {
        id: 23,
        title: "Record",
        content: `
        TypeScript에서 'Record<K,T>' 유틸리티 타입은 객체의 키와 값의 타입을 명시적으로 정의할 수 있게 해준다
        'K'는 키의 타입, 'T'는 해당 키에 할당될 값의 타입을 나타낸다.
        매핑된 타입의  한 형태로, 특정 키 집합에 대해 동일한 타입의 값을 가지는 객체를 표현할 때 유용하다.
        `,
        component: <Record />,
    },
    {
        id: 24,
        title: "Partial",
        content: `
        'Partial<T>' 유틸리티 타잉ㅂ은 주어진 타입'T'의 모든 속성을 선택적으로 만든다.
        'Partial'을 사용하면 기존 타입의 모든 필드를 포함하지만
        각 필드는 필수가 아니라 선택 사항이 된다.
        다향한 상황에서 객체를 부분적으로 업데이트하거나 초기화할 필요가 있을 때 유용하다.
        `,
        component: <Partial />,
    },
    {
        id: 25,
        title: "Omit",
        content: `
        'Omit<T, K>' 유틸리티 타입은 타입 'T'에서 선택된 속성 'K'를 제거한 타입을 생성한다.
        'Omit'은 특정 속성을 제외하고 타입의 나머지 부분을 사용하고 싶을 때 유용하다
        객체 타입을 조작하여 새로운 타입을 도출하는데 도움을 주며, 타입 세이프티를 유지하면서 필요하지 않은 속성을 제거할 수 있다
        `,
        component: <Omit />,
    },
    {
        id: 26,
        title: "Pick",
        content: `
        'Pick<T, K> 유틸리티 타입은 타입 'T'에서 선택한 속성 'K'만을 포함하는 새로운 타입을 생성한다.
        특정 속성들만 추출하여 사용하고 싶을 때 매우 유용하다
        'Pick'을 사용함으로써, 복잡한 타입에서 필요한 부분만을 간소화하여 새로운 타입을 정의할 수 있다.
        `,
        component: <Pick />,
    },
    {
        id: 27,
        title: "Extract",
        content: `
        'Extract<T, U>'유틸리티 타입은 두 타입 'T'와 'U'의 교집합을 형성하는 새로운 타입을 생성한다.
        'Extract<T, U>'는 타입 'T'에서 타입'U'에 할당 가능한 모든 속성을 추출하여 구성된 타입을 반환한다.
        특정 조건을 만족하는 타입의 서브셋을 추출할 때 유용하게 사용된다
        `,
        component: <Extract />,
    },
    {
        id: 28,
        title: "ReturnType",
        content: `
        'ReturnType<T> 유틸리티 타입은 함수 타입 'T'의 반환 타입을 추출하여 사용할 수 있게 한다.
        함수의 반환 타입을 다른 곳에서 참조하고 싶을 때 유용하게 사용된다.
        'ReturnType'을 사용함으로써 함수의 반환 값을 예상하고 이를 타입 체크에 활용할 수 있다.
        `,
        component: <ReturnType />,
    },
    {
        id: 29,
        title: "Optional",
        content: `
        선택적 속성은 객체의 인터페이스 또는 타입 정의에서 특정 속성이 필수가 아닌 선택적으로 포함될 수 있음을 나타난다.
        속성 이름 뒤에 ?(물음표)를 붙여서 표시하며, 이는 해당 속성이 해당 타입의 객체에서 있어도 되고 없어도 되는 것을 의미한다.
        `,
        component: <Optional />,
    },
    {
        id: 30,
        title: "Satisfies",
        content: `
        'satisfies' 연산자를 사용하면 값이 특정 타입과 호환되는지 확인하고, 호환되지 않을 경우 컴파일 타임에 에러를 발생시킨다.
        주로 타입 안정성을 보장하고, 타입 계약을 명시적으로 표현하는데 도움을 준다.
        `,
        component: <Satisfies />,
    },
    {
        id: 31,
        title: "Generic",
        content: `
        제네릭은 코드에서 타입을 매개변수처럼 사용할 수 있도록 해줍니다.
        제네릭을 사용하면 함수, 클래스, 인터페이스, 타입 등을 다양한 타입으로 재사용할 수 있어 타입의 유연성을 크게 향상시킨다.
        코드 중복을 줄이고, 타입 안정성을 높이며, 유지보수를 용이하게 한다
        `,
        component: <Generic />,
    },
];

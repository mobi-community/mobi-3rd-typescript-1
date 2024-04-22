import Any from "../defaultType/any";
import Array from "../defaultType/array";
import Boolean from "../defaultType/boolean";
import Conditional from "../defaultType/conditional";
import Interface from "../defaultType/interface";
import NumberPage from "../defaultType/number";
import Object from "../defaultType/object";
import String from "../defaultType/string";
import TypeAlias from "../defaultType/typeAlias";
import Union from "../defaultType/union";
import Unknown from "../defaultType/unknown";

interface Arrangement {
    id: number;
    title: string;
    content: string;
    component: React.ReactElement;
}

export const Definition: Array<Arrangement> = [
    {
        id: 1,
        title: "Number",
        content: `Number(숫자)
        JavaScript처럼, TypeScript의 모든 숫자는 부동 소수 값이다.
        부동 소수에는 'number'라는 타입이 붙혀진다.
        TypeScript는 16진수, 10진수 리터럴에 더불어, ECMAScript 2015에 소개된 2진수, 8진수 리터럴도 지원한다.
        JavaScript와 마찬가지로, TypeScript에서 숫자는 모두 배정밀도 64비트 형식 IEEE 754값 (즉, 'double')으로 표현된다.
        'number'타입 사용 시, 숫자 값이 아닌 다른 값이 할당되려고 하면 컴파일 에러를 발생시킨다.`,
        component: <NumberPage />,
    },
    {
        id: 2,
        title: "String",
        content: `'string'타입은 텍스트 데이터를 표현하는 데 사용된다
        JavaScrpit와 마찬가지로, TypeScript의 'string'은 유니코드 문자의 시퀀스로 구성된다
        문자열은 큰따옴표, 작은따옴표, 백틱을 사용하여 생성할 수 있다`,
        component: <String />,
    },
    {
        id: 3,
        title: "Boolean",
        content: `'boolean'타입은 두가지 값만 가질 수 있는 데이터 유형이다: 'true'와'false'
        주로 조건문, 제어 흐름, 논리 연산 등에 사용된다.
        'boolean'타입은 JavaScript의 기본 'Boolean'타입을 기반으로 하며, TypeScript에서는 타입 안정성과 
        코드의 명확성을 높이기 위해 명시적으로 사용된다
        `,
        component: <Boolean />,
    },
    {
        id: 4,
        title: "Any",
        content: `
        'any'타입은 가장 유연한 타입으로, 변수에 모든 종류의 값이 할당될 수 있게 한다.
        TypeScript의 타입 체크 기능을 일시적으로 비활성화 할수있다
        외부 라이브러리나 API로부터 데이터를 받아올 때 그 형태를 알 수 없는 경우
        기존 JS를 TS로 마이그레이션 하는 과정에서 모든 타입을 즉시 명시할 수 없는 경우
        동적 콘텐츠를 다루는 경우 등에 사용될 수 있다.
        `,
        component: <Any />,
    },
    {
        id: 5,
        title: "Object",
        content: `
        'object'타입은 비원시 타입을 의미한다.
        숫자, 문자열, 불리언, 심볼,'null',또는 'undefined'가 아닌 모든 것을 나타낸다
        배열, 함수, 클래스, 그리고 일반적인 객체 리터럴을 포함한다
        `,
        component: <Object />,
    },
    {
        id: 6,
        title: "Array",
        content: `
        TypeScript에서 배열을 정의하는 방법은 몇 가지가 있다.
        일반 배열 타입: '타입[]'을 사용하여 배열의 요소 타입을 지정
        제네릭 배열 타입: 'Array<타입>'을 사용하여 배열을 정의
        기능적으로는 동일하다
        `,
        component: <Array />,
    },
    {
        id: 7,
        title: "Unknown",
        content: `
        TypeScript에서 'unknown' 타입은 'any'타입의 타입-안전한 대안으로 도입되었다
        어떠한 값도 'unknown'에 할당할 수 있습니다.
        'unknown' 타입의 변수에는 타입을 좁히기 전에는 어떤 연산도 수행할 수 없다
        'unknown'타입을 다른 타입에 할당하려면, 타입 검사를 통해 해당 타입이 맞는지 확인하거나 타입 단언을 사용해야한다
        `,
        component: <Unknown />,
    },
    {
        id: 8,
        title: "Union",
        content: `
        Union 타입은 여러 타입 중 하나가 될 수 있는 값을 정의할 때 사용한다.
        다양한 타입을 하나의 타입으로 조합할 수 있게 해준다.
        Union 타입은 각 타입을 파이프('|') 기호로 연결하여 사용한다.
        `,
        component: <Union title={"Union"} />,
    },
    {
        id: 9,
        title: "Conditianal",
        content: `
        조건부 타입(Conditional Types)은 입력된 타입에 따라 다른 타입을 반환할 수 있도록 해주는 고급 유형 시스템 기능이다.
        일반적으로 제네릭 타입과 함께 사용되며, 특정 조건에 따라 타입을 분기 처리할 수 있다.
        기본 형태 : TypeA extends TypeB ? TypeC : TypeD;
        `,
        component: <Conditional data="ababc" />,
    },
    {
        id: 10,
        title: "type alias",
        content: `
        타입 별칭(type alias)을 사용하면 복잡한 타입을 재사용 가능한 방식으로 이름을 지정할 수 있다.
        기본적인 타입 뿐만 아니라 객체, 유니언, 튜플, 그리고 어떤 복잡한 타입의 구조도 정의할 수 있다.
        `,
        component: <TypeAlias data={true} />,
    },
    {
        id: 11,
        title: "Interface",
        content: `
        TypeScript에서 인터페이스('interface')는 객체의 타입을 명시하는데 사용된다.
        클래스 또는 객체의 구조를 정의할 때 유용하며, TypeScript의 객체 지향 프로그래밍 패러다임에 매우 중요하다
        인터페이스를 통해 특정 구조를 갖춘 객체만이 특정 함수나 클래스에 전달될 수 있도록 제한할 수 있다.
        `,
        component: <Interface />,
    },
];

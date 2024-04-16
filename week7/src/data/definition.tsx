import NumberPage from "../type/number";
import String from "../type/string";

interface Arrangement {
    title: string;
    content: string;
    component: React.ReactElement;
}

export const Definition: Array<Arrangement> = [
    {
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
        title: "String",
        content: `'string'타입은 텍스트 데이터를 표현하는 데 사용된다
        JavaScrpit와 마찬가지로, TypeScript의 'string'은 유니코드 문자의 시퀀스로 구성된다
        문자열은 큰따옴표, 작은따옴표, 백틱을 사용하여 생성할 수 있다`,
        component: <String />,
    },
    {
        title: "Boolean",
        content: 
    }
];

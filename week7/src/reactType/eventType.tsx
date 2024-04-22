/**
 *  자주 접하는 이벤트 타입에는 'MouseEvent','ChangeEvent','FormEvent'등이 있다.
 *  이벤트 타입들은 React에서 HTML 요소의 이벤트를 처리할 때 타입 안정성을 제공한다.
 */
import React, { useEffect, useRef, useState } from "react";
import { S } from "../styles/cssStyle";

// 버튼 클릭 이벤트
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("버튼 클릭", event);
};

// form 이벤트
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
};

const EventType: React.FC = () => {
    // change 이벤트
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        console.log("Input change to: ", event.target.value);
    };

    // HTML<>Element
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (divRef.current) {
            console.log(divRef.current.clientHeight);
        }
    }, []);

    const content = `
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("버튼 클릭", event);};
    `;

    const content1 = `
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        console.log('Input change to: ',event.target.value);}
    `;

    const content2 = `
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); console.log('Form submitted');}
    `;

    const content3 = `
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (divRef.current) {
            console.log(divRef.current.clientHeight);}}, []);
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>ReactNode</h1>
                <S.Wrapper>
                    <S.Text>
                        <p>버튼 클릭 이벤트</p>
                        <S.Pre>{content}</S.Pre>
                        <button onClick={handleClick}>클릭</button>
                    </S.Text>
                </S.Wrapper>
                <S.Wrapper>
                    <S.Text>
                        <p>Input change 이벤트</p>
                        <S.Pre>{content1}</S.Pre>
                        <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                        />
                    </S.Text>
                </S.Wrapper>
                <S.Wrapper>
                    <S.Text>
                        <p>폼 제출 이벤트</p>
                        <S.Pre>{content2}</S.Pre>
                        <form onSubmit={handleSubmit}>
                            <button type="submit">클릭</button>
                        </form>
                    </S.Text>
                </S.Wrapper>
                <S.Wrapper>
                    <S.Text>
                        <p>HTML&lt;&gt;Element</p>
                        <S.Pre>{content3}</S.Pre>
                        <div ref={divRef}>Hi, Bye</div>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default EventType;

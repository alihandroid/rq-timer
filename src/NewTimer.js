import { useState } from "react";

import Button from "./Button";
import Input from "./Input";

function NewTimer({ onAdd }) {
    const [data, setData] = useState({ minutes: 0, seconds: 0 });

    const onChange = (evt) => {
        setData((oldData) => ({
            ...oldData,
            [evt.target.name]: evt.target.valueAsNumber,
        }));
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAdd(data.minutes * 60 + data.seconds);
        setData({ minutes: 0, seconds: 0 });
    };

    return (
        <form onSubmit={onSubmit} className="timer timer-new">
            <ul className="parts">
                <Input name="minutes" value={data.minutes} onChange={onChange} />
                <li className="colon">:</li>
                <Input name="seconds" value={data.seconds} onChange={onChange} />
            </ul>
            <Button icon="play" label="Start" />
        </form>
    );
}

export default NewTimer;
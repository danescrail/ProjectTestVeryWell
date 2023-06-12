import { classNames } from "shared/lib/classNames/classNames";
import cls from './BugButton.module.scss';
import { useEffect, useState } from "react";
import Button from "shared/ui/Button/Button";

interface BugButton {
    className?: string
}

const BugButton = ({ className }: BugButton) => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        throw new Error();
    }, [error])
    return (
        <Button
            onClick={onThrow}
            className={classNames(cls.BugButton, {}, [className])}>
        throw error
        </Button>
    )
}

export default BugButton;
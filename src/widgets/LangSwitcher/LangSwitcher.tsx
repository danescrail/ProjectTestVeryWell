import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <div className={classNames('', {}, [className])}>
            <Button
                onClick={toggle}
                theme={ThemeButton.CLEAR}
            >
                {t('Язык')}
            </Button>
        </div>
    );
}

export default LangSwitcher;
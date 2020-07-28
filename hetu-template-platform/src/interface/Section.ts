import { FormItemProps } from './Item'
export interface PureFormSectionProps {
    list: FormItemProps[],
    config: FormProps
}

export interface FormProps {
    formItemSpan?: number,
    submitSpan?: number,
    initIsFold?: number,
    noFoldBtn?: number,
    size?: number,
    onFinish: string
}


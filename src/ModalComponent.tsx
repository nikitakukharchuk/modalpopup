import {Modal, Form, Input, Button, Select, Typography, Space, Layout, Tag} from 'antd';
import {Controller, useForm} from 'react-hook-form';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import {FileDoneOutlined, LeftCircleOutlined} from "@ant-design/icons";
import styles from './ModalComponent.module.css'

const { Text } = Typography

type Props = {
    visible: boolean;
    onCancel: () => void;
};

type FormData = {
    comment: string;
    selection: string[];
};

const options = [
    { label: 'Стрижка ребенку', value: 'Стрижка ребенку' },
    { label: 'Стрижка взрослому', value: 'Стрижка взрослому' },
    { label: 'Стрижка бабушке', value: 'Стрижка бабушке' },
    { label: 'Стрижка дедушке', value: 'Стрижка дедушке' },
    { label: 'Стрижка семье', value: 'Стрижка семье' },
    { label: 'Стрижка собаке', value: 'Стрижка собаке' },
    { label: 'Стрижка папе', value: 'Стрижка папе' },
    { label: 'Стрижка маме', value: 'Стрижка маме' },
];

const SecondComponent = ({ visible, onCancel }: Props) => {
    const { handleSubmit, register, control } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        onCancel();
    };
    const tagRender = (props: CustomTagProps) => {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color='rgba(43, 122, 120, 0.6)'
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{ marginRight: 3 }}
                    >
                {label}
                    </Tag>
                    );
                };
    return (

        <Modal open={visible} onCancel={onCancel} footer={null}>
            <Layout style={{alignItems: "center", backgroundColor:'#fff', padding: '1rem'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Layout style={{ textAlign: 'center', backgroundColor:'#fff', marginBottom: '2rem'}}>
                <Text style={{ textAlign: "center" }}>Пожалуйста, выберите нужные вам услуги из предлагаемого списка. Если у вас есть какие-то дополнительные требования или пожелания, пожалуйста, опишите их в комментариях. </Text>
                </Layout>
                <Form.Item>
                    <Controller
                        render={({ field }) => <Select
                            mode="multiple"
                            dropdownStyle={{backgroundColor:'rgba(127, 174, 173, 0.2)'}}
                            showSearch
                            options={options}
                            className={styles.modalInput}
                            bordered={false}
                            listHeight={100}
                            tagRender={tagRender}
                            optionFilterProp="label"
                            {...field}
                        />}
                        name="selection"
                        control={control}
                    />
                </Form.Item>
                <Form.Item>
                    <div className='inputField'>
                    <Controller
                        render={({ field }) => <Input.TextArea style={{borderColor:'#2B7A78', marginTop: '6rem' }} {...field} rows={5} placeholder={'Дополнительные требования или пожелания ...'} />}
                        name="comment"
                        control={control}
                        defaultValue=""
                    />
                    </div>
                </Form.Item>
                <Space direction="horizontal" size="middle" style={{ display: 'flex', justifyContent:'space-between' }}>
                    <Button style={{background: "#2B7A78" , color:'#fff'}} onClick={onCancel}>
                        <LeftCircleOutlined />
                        Назад
                    </Button>
                    <Button style={{background: "#2B7A78" , color:'#fff'}} htmlType='submit'>
                        Записаться
                        <FileDoneOutlined />
                    </Button>
                </Space>
                </form>
            </Layout>

        </Modal>

    );
};

export default SecondComponent;

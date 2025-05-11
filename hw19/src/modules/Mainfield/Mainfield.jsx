import { useState } from "react";
import { Form, Input, Button, Card, Typography } from 'antd'

const Mainfield = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState({ name: '', description: '' });
    const [card, setCard] = useState(false);

    const handleSubmit = (value) => {
        setData(value)
        form.resetFields()
        setCard(true)

    }

    return (
        <>
            <Form form={form} onFinish={handleSubmit}>
                <Typography.Title level={2}>Форма с использованием Ant Design</Typography.Title>
                <Typography>Имя</Typography>
                <Form.Item name='name'>
                    <Input placeholder="Name" ></Input>
                </Form.Item>
                <Typography>Описание</Typography>
                <Form.Item name='description'>
                    <Input placeholder="Description" ></Input>
                </Form.Item>
                <Button type="primary" htmlType="submit">Отправить</Button>
            </Form>

            {card && <Card>
                <Typography.Title level={4}> Отправленные данные :</Typography.Title>
                <Typography>Имя: {data.name}</Typography>
                <Typography>Описание: {data.description}</Typography>
            </Card>}
        </>
    )
}
export default Mainfield;
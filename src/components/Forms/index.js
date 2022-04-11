import { Form } from 'antd';

import React from 'react'

const FormItem = React.memo(({children, ...rest}) => {
  return (
    <Form.Item
        {...rest}
    >
          {children}
    </Form.Item>
  )
})

export default FormItem

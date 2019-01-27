import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';


class MapConfigForm extends Component {

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        md: { span: 24 },
        lg: { span: 4 },
      },
      wrapperCol: {
        md: { span: 24 },
        lg: { span: 20 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        md: {
          span: 24,
          offset: 0,
        },
        lg: {
          span: 19,
          offset: 5,
        }
      }
    };

    return (
      <Form onSubmit={(e) => this.props.handleSubmit(e, this.props.form)} hideRequiredMark={true} className="map-config-form">
        <Form.Item
          {...formItemLayout}
          label="Job title"
        >
          {getFieldDecorator('job_title', {
            rules: [{ required: true, message: 'You must input a job title.' }],
          })(
            <Input prefix={<Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Software Developer" />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Location"
        >
          {getFieldDecorator('location', {
            rules: [{ required: true, message: 'You must choose a location.' }],
          })(
            <Input prefix={<Icon type="pushpin" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Vancouver, BC" />
          )}
        </Form.Item>
        <Form.Item
        {...tailFormItemLayout}>
            <Button type="primary" icon="search" htmlType="submit" className="map-config-form-button">
              Search!
            </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default MapConfigForm;

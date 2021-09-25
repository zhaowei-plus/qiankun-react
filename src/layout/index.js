import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, Skeleton } from 'antd'
import { setup } from '@formily/antd-components'
import zhCN from 'antd/lib/locale/zh_CN'
import Routes from '@/routes'
import Container from './components/Container'

import 'antd/dist/antd.css'
import './index.less'

// formily 注册表单
setup()

function render() {
    ReactDOM.render(
      <ConfigProvider locale={zhCN}>
        <BrowserRouter basename="/react">
          <Container>
            <Suspense fallback={<Skeleton />}>
              <Routes />
            </Suspense>
          </Container>
        </BrowserRouter>
      </ConfigProvider>,
      document.getElementById('root'),
    )
}

// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN__) {
    render();
} else {
    // 动态添加 publicPath

    // eslint-disable-line [no-undef]
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {

}

export async function mount() {
    render()
}

export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
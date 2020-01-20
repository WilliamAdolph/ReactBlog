import {Avatar, Divider} from 'antd'
import '../public/style/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div><Avatar size={100} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579430990882&di=83eb12a4eadd6b0f82e764d22b8d633e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F15%2F20190115070811_typkx.jpg"/></div>
      <div className="author-introduction">
        William的个人博客系统，react+egg+mysql
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account"/>
        <Avatar size={28} icon="qq" className="account"/>
        <Avatar size={28} icon="wechat" className="account"/>
      </div>
    </div>
  )
}

export default Author
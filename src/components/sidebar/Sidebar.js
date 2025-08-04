import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* twitterアイコン */}
      <TwitterIcon className='sidebar_twitterIcon'/>

      {/* SidebarOption */}
      <SidebarOption text="ホーム" Icon={HomeOutlinedIcon}/>
      <SidebarOption text="話題を検索" Icon={SearchIcon}/>
      <SidebarOption text="通知" Icon={NotificationsOutlinedIcon}/>
      <SidebarOption text="メッセージ" Icon={EmailOutlinedIcon}/>
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderOutlinedIcon}/>
      <SidebarOption text="リスト" Icon={FormatListBulletedIcon}/>
      <SidebarOption text="プロフィール" Icon={Person2OutlinedIcon}/>
      <SidebarOption text="もっとみる" Icon={MoreHorizOutlinedIcon}/>
      {/* ツイートボタン */}
    </div>
  )
}

export default Sidebar
import React from 'react';

import cssObj from '@/css/cmtList.scss'

export default function CmtItem(props) {
    return <div className={[cssObj.item]}>
        <h2 className={cssObj.user}>评论人： {props.user}</h2>
        <h4 className={cssObj.content}>评论内容： {props.content}</h4>
    </div>
}

import React from 'react';
import ReactDom from 'react-dom'

import BindEvent from '@/components/BindEvent'

const myH3 = <h3>独自走在繁华的都市，擦身而过的是熙熙攘攘的人群。路灯拉长孤独的身影，热闹都是旁人的，你总是一个人...</h3>;


ReactDom.render(<div>
    {myH3}
    <BindEvent/>
</div>, document.getElementById('app'));
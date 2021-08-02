import './app2.css'
import $ from "jquery";
const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');

$tabBar.on('click', 'li', (e) => {  //监听 tabBar 的所有子元素 li，事件委托
    const $li = $(e.currentTarget);
    $li.addClass('selected')  //选中的 li 添加 Class 并删除其他兄弟元素的
        .siblings().removeClass('selected')
    const index = $li.index();
    $tabContent.children() //寻找索引为 index 的子元素并添加 Class，其他删除
        .eq(index).addClass('active')
        .siblings().removeClass('active')  //样式与行为分离
});

$tabBar.children().eq(0).trigger('click')  //触发点击事件
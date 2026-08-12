/* 复用模板时，优先修改此文件。图片可换成任意相对路径或网址。 */
window.PROJECT={
  studio:"合止间设计研究室", title:"天樾玺", unit:"16-1501", date:"2026.07.06", version:"DESIGN PROPOSAL V1",
  quote:"白是无色之色，黑是众色之母。它们藏纳万物，也拥抱万物。极简的外表之下，是生活多重行为的发生。",
  facts:[{label:"建筑高度",value:"2.80 m / 1层"},{label:"建筑面积",value:"120 m²"},{label:"轴中面积",value:"104 m²"},{label:"项目功能",value:"私宅"}],
  site:{title:"基地情况",subtitle:"SITE CONDITIONS",pages:[4,5,6]},
  concept:{title:"实与虚",subtitle:"THE SOLID + THE VOID",intro:"以实体建立秩序，以虚体容纳生活。结构、储藏与界面退为安静的躯壳；风、光与人的活动成为空间真正的精神。",themes:[{name:"实体 · 躯壳",en:"THE SOLID / LANDMARK",text:"抵达、体块、比例与公共空间构成清晰的秩序。",page:9},{name:"虚体 · 精神",en:"THE VOID / LANDSCAPE",text:"宁静、惊喜与自我观照，为日常留下可以发生的空白。",page:10},{name:"风",en:"WIND",text:"流动、镜面、雨水与时间痕迹，让空间保持呼吸。",page:11},{name:"光",en:"LIGHT",text:"直射光与环境光随时间移动，塑造不同强度的生活场景。",page:12}]},
  plans:[{name:"原始平面",page:14},{name:"方案平面 A",page:15},{name:"方案平面 B",page:16}],
  spaces:[
    {id:"living",name:"客厅",en:"SITTING ROOM",summary:"放松、简洁、克制；公共空间以开阔视线承接家庭日常。",pages:[17,18,19,20]},
    {id:"porch",name:"玄关",en:"PORCH",summary:"用完整界面组织抵达、收纳与视线转换。",pages:[21,22,23]},
    {id:"kitchen",name:"厨房 / 餐厅",en:"KITCHEN / RESTAURANT",summary:"餐厨关系更开放，让烹饪与相聚成为同一场景。",pages:[24,25,26,27]},
    {id:"guestbath",name:"外卫",en:"GUEST BATH",summary:"简化材料与体块，让有限尺度保持清爽。",pages:[28,29]},
    {id:"master",name:"主卧",en:"MASTER BEDROOM",summary:"温和的木色与低饱和材质构成安静的休息空间。",pages:[30,31,32]},
    {id:"masterbath",name:"主卫",en:"MASTER BATH",summary:"以连续石材、柔光和隐藏收纳建立洁净秩序。",pages:[33,34]},
    {id:"second",name:"次卧",en:"SECOND BEDROOM",summary:"留出弹性布置，使空间适应不同阶段的使用需求。",pages:[35,36,37,38]},
    {id:"balcony",name:"生活阳台",en:"LIFE BALCONY",summary:"洗护、储藏与设备集中整合，降低日常视觉噪音。",pages:[39,40]}
  ],
  next:["确认本次设计范围：仅硬装，或包含定制家具、装置与品牌家具等软装内容","确认已有意向品牌及尺寸、型号、颜色，以便效果图更接近最终落地","确定日常对接时间，便于异地条件下提前准备各阶段资料","提供意向入住时间，便于制定整体项目计划"],
  asset:n=>`assets/pages/page-${String(n).padStart(2,"0")}.jpg`
};

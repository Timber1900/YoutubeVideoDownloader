const div = document.createElement('div');
div.classList.add('playItem');
div.classList.add('show');

const span1 = document.createElement('span');
const span2 = document.createElement('span');
const span3 = document.createElement('span');
const span4 = document.createElement('span');
span1.classList.add('preview-container');
span2.classList.add('video-name-container');
span3.classList.add('video-options');
span4.classList.add('video-options-placeholder');

const image = document.createElement('img');
image.classList.add('image');

const menu_image = document.createElement('img');
menu_image.src = '../assets/more_vert-24px.png';

const menu_div = document.createElement('div');
menu_div.classList.add('dropdown-content');

const rename_label = document.createElement('label');

const trim_span = document.createElement('span');

const trim_label = document.createElement('label');
trim_label.innerHTML = 'Trim video';

const trim_outer_div = document.createElement('div');
trim_outer_div.classList.add('outer')

const trim_buttons_span = document.createElement('span');
trim_buttons_span.classList.add('trim-btn-span')
trim_buttons_span.setAttribute('name', 'buttons')


const trim_leave_button = document.createElement('button');
const trim_add_clip = document.createElement('button');
trim_leave_button.classList.add('trim-btn')
trim_leave_button.innerHTML = 'Leave'
trim_add_clip.classList.add('trim-btn')
trim_add_clip.innerHTML = 'Add clip'

trim_buttons_span.appendChild(trim_leave_button)
trim_buttons_span.appendChild(trim_add_clip)

trim_outer_div.appendChild(trim_buttons_span)

trim_span.appendChild(trim_label)
trim_span.appendChild(trim_outer_div)


const download_label = document.createElement('label');
const separator = document.createElement('hr');
const qual_span = document.createElement('span');
rename_label.innerHTML = 'Rename video';
download_label.innerHTML = 'Download video';
separator.classList.add('separator');
qual_span.classList.add('qual-span');

const qual_label = document.createElement('label');
qual_label.innerHTML = 'Quality';
const qual_sel = document.createElement('select');
qual_label.classList.add('qual-sel');

qual_span.appendChild(qual_label);
qual_span.appendChild(qual_sel);

menu_div.appendChild(rename_label);
menu_div.appendChild(trim_span);
menu_div.appendChild(download_label);
menu_div.appendChild(separator);
menu_div.appendChild(qual_span);

span1.appendChild(image);
span3.appendChild(menu_image);
span3.appendChild(menu_div);

div.appendChild(span1);
div.appendChild(span2);
div.appendChild(span3);
div.appendChild(span4);

const templateDiv = div;

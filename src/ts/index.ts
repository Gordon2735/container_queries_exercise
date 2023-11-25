// 'use strict';

// import stylis, {
// 	compile,
// 	serialize,
// 	middleware,
// 	prefixer,
// 	stringify
// } from '../@types/stylis/index.js';
// // import * as stylis from '../@types/stylis/index.js';

// window.stylis = stylis;

// console.info(
// 	`
//         %c index.ts is being read so the loading was nominal!
//     `,
// 	`   font-family: Source Code Pro; font-size: 0.85em; color: chartreuse;
//         background-color: black;`
// );

// function tabbed(
// 	selection: Selection | null,
// 	range: Range,
// 	ranges: {
// 		deleteContents: () => void;
// 		insertNode: (arg0: any) => void;
// 		setStartAfter: (arg0: any) => void;
// 	},
// 	content: Text
// ) {
// 	range = document.createRange();
// 	selection = window.getSelection();
// 	selection?.removeAllRanges();
// 	ranges.deleteContents();
// 	ranges.insertNode(content);
// 	ranges.setStartAfter(content);
// 	selection?.removeAllRanges();
// 	selection?.addRange(range);
// }

// const target = document.getElementById('editor');
// const output = document.getElementById('output') as HTMLElement;
// // update output preview
// function update(value: any): void {
// 	let node: Text = value.content;
// 	switch (value.keyCode) {
// 		// tab indent
// 		case 9:
// 			tabbed(
// 				(value = window.getSelection()),
// 				value.getRangeAt(0),
// 				value.ranges,
// 				document.createTextNode(`${node}\t`)
// 			);
// 			value.preventDefault();
// 			break;
// 		// formatting
// 		default:
// 			value = serialize(
// 				compile(`[namespace]{${value.target.textContent}}`),
// 				middleware([prefixer, stringify])
// 			);
// 			value = value.replace(
// 				/(;|\})/g,
// 				(_match: any, group: string) =>
// 					group + (group === '}' ? '\n\n' : '\n')
// 			);
// 			value = value.replace(
// 				/(.*?)\{/g,
// 				(_match: any, group: { trim: () => string }) =>
// 					'<span class=selector>' + group.trim() + '</span> {\n'
// 			);
// 			value = value.replace(
// 				/:(.*);/g,
// 				(_match: any, group: { trim: () => string }) =>
// 					': <span class=value>' + group.trim() + '</span>;'
// 			);
// 			value = value.replace(
// 				/^[^@].*;$/gm,
// 				(match: string) => '\t' + match
// 			);
// 			value = value.replace(/\}\n\n\}/g, '}\n}');
// 			value = value.replace(
// 				/(.*@.*\{)([^}]+\})(\n\})/g,
// 				(
// 					_match: any,
// 					group1: any,
// 					group2: {
// 						split: (arg0: string) => {
// 							(): any;
// 							new (): any;
// 							join: { (arg0: string): any; new (): any };
// 						};
// 					},
// 					group3: any
// 				) => group1 + group2.split('\n').join('\n\t') + group3
// 			);
// 			value = value.replace(
// 				/['"`].*?['"`]/g,
// 				(match: { trim: () => string }) =>
// 					'<span class=string>' + match.trim() + '</span>'
// 			);

// 			output.innerHTML = value;
// 	}
// }

// target?.addEventListener('keydown', update);
// target?.addEventListener('input', update);

// update({ target });

// console.info(
// 	`
//         %c index.ts is being read so the loading was nominal!
//     `,
// 	`   font-family: Source Code Pro; font-size: 0.85em; color: chartreuse;
//         background-color: black;`
// );

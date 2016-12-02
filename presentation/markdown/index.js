import title from './title.md';
import toc from './toc.md';
import whatIsWebpack from './what-is-webpack.md';
import whatDoesItLookLike from './what-does-it-look-like.md';
import webpackStep1 from './step-by-step-1.md';
import webpackStep2 from './step-by-step-2.md';
import endResult from './end-result.md';
import es6Es7 from './es6-es7.md';
import es6Es7Arrow from './es6-es7-arrow.md';
import letConst from './let-const.md';
import shorthand from './shorthand.md';
import asyncAwait from './async-await.md';
import removingPromises from './removing-promises.md';
import compiledVersion from './compiled-version.md';
import promisesTopLevel from './promises-top-level.md';
import links from './links.md';
import thanks from './thanks.md';

require('../../assets/markdown.scss');
require('../../assets/highlight.css');

const markdown = {
    title,
    toc,
    whatIsWebpack,
    whatDoesItLookLike,
    webpackStep1,
    webpackStep2,
    endResult,
    es6Es7,
    es6Es7Arrow,
    letConst,
    shorthand,
    asyncAwait,
    removingPromises,
    compiledVersion,
    promisesTopLevel,
    links,
    thanks
};

export default markdown;

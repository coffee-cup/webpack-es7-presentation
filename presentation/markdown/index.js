// Intro
import title from './title.md';
import toc from './toc.md';

// Webpack
import whatIsWebpack from './what-is-webpack.md';
import whatDoesItLookLike from './what-does-it-look-like.md';
import stepByStep from './step-by-step.md';
import configObject from './config-object.md';
import buildConfig from './build-config.md';
import entryOutput from './entry-output.md';
import resolving from './resolving.md';
import rules from './rules.md';
import plugins from './plugins.md';
import optimization from './optimization.md';
import endResult from './end-result.md';

// ES6 / ES7
import es6Es7 from './es6-es7.md';
import es6Es7Arrow from './es6-es7-arrow.md';
import letConst from './let-const.md';
import shorthand from './shorthand.md';

// Async / Await
import asyncAwait from './async-await.md';
import removingPromises from './removing-promises.md';
import compiledVersion from './compiled-version.md';
import promisesTopLevel from './promises-top-level.md';

// Outro
import links from './links.md';
import thanks from './thanks.md';

require('../../assets/markdown.scss');
require('../../assets/highlight.css');

const markdown = {
    title,
    toc,
    whatIsWebpack,
    whatDoesItLookLike,
    stepByStep,
    configObject,
    buildConfig,
    entryOutput,
    resolving,
    rules,
    plugins,
    optimization,
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

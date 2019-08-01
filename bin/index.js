#!/usr/bin/env node

/* eslint-disable no-console */
const commander = require('commander');
const colors = require('colors/safe');

const Stocker = require('./../lib/Stocker');
const packageInfo = require('./../package.json');

const program = new commander.Command();
const stocker = new Stocker();

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
};

const action = {
  search: async (arrStr) => {
    const arr = arrStr.split(',');
    asyncForEach(arr, async (searil) => {
      const { name, value } = (await stocker.getPrice(searil)) || {};
      console.log(`${name}:\t ${colors.red(value)}`);
    });
  },
};

program
  .version(packageInfo.version, '-v, --version')
  .option('-s, --search <serials>', 'enter stock serials to search with comma separated, like: SH000001,SZ399006', action.search);

program.parse(process.argv);

if (program.rawArgs.length <= 1) program.help();

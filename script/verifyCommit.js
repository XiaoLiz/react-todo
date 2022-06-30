const fs = require('fs');

const msg = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf-8');

const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

const mergeRE = /^(Merge pull request | Merge branch)/

if (!commitRE.test(msg)) {
    if (!mergeRE.test(msg)) {
        console.log('提交格式不符合规范')

        process.exit(1)
    }
}
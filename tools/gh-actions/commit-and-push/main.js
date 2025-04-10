module.exports = async ({ context, core, exec, inputs }) => {
    const fs = require('node:fs/promises');

    const githubToken = inputs['github-token'];

    if (githubToken === '') {
        core.setFailed('Please add GITHUB_TOKEN to the action input');

        return;
    }

    await fs.writeFile(
        `${process.env.HOME}/.netrc`,
        `machine github.com\nlogin github-actions[bot]\npassword ${githubToken}`,
    );

    await exec.exec('git', ['config', 'user.name', `"github-actions[bot]"`]);

    await exec.exec('git', [
        'config',
        'user.email',
        `"41898282+github-actions[bot]@users.noreply.github.com"`,
    ]);

    await exec.exec('git', ['add', '.']);

    const message = inputs['message'];

    await exec.exec('git', ['commit', '-n', '-m', message]);

    await exec.exec('git', ['push', 'origin', context.ref]);
};

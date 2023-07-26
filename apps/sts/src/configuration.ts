export default () => ({
    jwt: {
        secret: process.env['STS_JWT_SECRET'],
        expiry: process.env['STS_JWT_EXPIRY'] || '7d',
    }
});

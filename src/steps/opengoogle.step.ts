import { assert } from 'chai';
import { binding, given, then, when } from 'cucumber-tsflow';
import open from 'open';

@binding()
export class OpenGoogleSteps {
    private url;
    @given('a user opens {string}')
    public givenUserOpenUrl(url) {
        console.log(url);
        this.url = url;
    }

    @when('url is string')
    public urlIsString() {
        assert.isString(this.url, "url is not string");
    }

    @then('open url in browser')
    public openUrlInBrowser() {
        open(this.url, { app: [{ name: 'chrome' }] });
    }
}
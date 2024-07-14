import bodyParser from 'body-parser';

export function bodyParserUrlencodedExtended() {
    return bodyParser.urlencoded({ extended: true });
}

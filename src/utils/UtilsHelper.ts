export class UtilsHelper {

    public static threeDigitSeparator = (value: any) => {
        try {
            if (!value) {
                return '';
            }

            const isValueTypeSuitable = typeof value === 'number' || typeof value === 'string';
            if (!isValueTypeSuitable) {
                return '';
            }
            return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
        catch (e) {
            return '';
        }
    };
}
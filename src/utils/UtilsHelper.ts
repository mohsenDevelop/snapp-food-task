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

            // Convsert the `value` to string
            // Value += '';
            return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            // Return value.toLocaleString('en')
        }
        catch (e) {
            return '';
        }
    };
}
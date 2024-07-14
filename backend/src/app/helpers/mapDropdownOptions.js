export function mapDropdownOptions(models, selectedValue, params = {}) {
    const {
        valueField = 'id',
        titleField = 'name'
    } = params;


    return models.map((item) => {
        const value = item[valueField];

        return {
            value,
            title: item[titleField],
            selected: value === selectedValue ? 'selected' : '',
        };
    });
}

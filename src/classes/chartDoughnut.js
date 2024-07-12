import Chart from 'chart.js/auto';

class ChartDoughnut {
    constructor(ctx, data, type, options) {
        this.chart = new Chart(ctx, {
            type: type,
            data: data,
            options: options
        });
    }

    destroy() {
        this.chart.destroy();
    }
}

export default ChartDoughnut;
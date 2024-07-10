import Chart from 'chart.js/auto';

class ChartDoughnut {
    constructor(ctx, data, type, options) {
        this.chart = new Chart(ctx, {
            type: type,
            data: data,
            options: options
        });
    }

    update(data) {
        this.chart.data.datasets[0].data = data;
        this.chart.update();
    }

    destroy() {
        this.chart.destroy();
    }
}

export default ChartDoughnut;
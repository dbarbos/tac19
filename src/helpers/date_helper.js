export default class dh {
    static format(date) {
        var d = date.split("-");
        return d[2] + "/" + d[1] + "/" + d[0]
    }
    static formatDateFirebase(date) {
        return date.toDate().toLocaleDateString();
    }
    static formatApiDate(date, show_time = true) {
        var d = new Date(date);
        if (show_time) return d.toLocaleDateString() + " - " + d.toLocaleTimeString();
        else return d.toLocaleDateString();
    }
    static formatISO(date) {
        var d = new Date(date);
        return dh.format(d.toISOString().substr(0, 10));
    }
    static dateDiffDays(date1, date2) {
        var dt1 = new Date(date1);
        var dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }

}
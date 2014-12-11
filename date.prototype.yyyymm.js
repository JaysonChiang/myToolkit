        Date.prototype.yyyymm = function () {
            var yyyy = this.getFullYear().toString();
            var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
            return (yyyy[1] ? yyyy : "0" + yyyy[0])+''+(mm[1] ? mm : "0" + mm[0])  // padding
        };

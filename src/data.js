import $ from 'jquery';

var employeeService = (function () {

    var findById = function (id) {
            var deferred = $.Deferred();
            var employee = null;
            var l = employees.length;
            for (var i = 0; i < l; i++) {
                if (employees[i].id == id) {
                    employee = employees[i];
                    break;
                }
            }
            deferred.resolve(employee);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = employees.filter(function (element) {
                var fullName = element.firstName + " " + element.lastName;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByManager = function (managerId) {
            var deferred = $.Deferred();
            var results = employees.filter(function (element) {
                return managerId === element.managerId;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        employees = [
            {"id": 1, "firstName": "Joe", "lastName": "Stutzman", "managerId": 1, "managerName": "N/A", "reports": 4, "title": "Art Director", "department": "Studio", "mobilePhone": "617-000-0001", "officePhone": "781-000-0001", "email": "joe.stutzman@endurance.com", "city": "Austin, TX", "pic": "joe_stutzman.jpg", "twitterId": "@jstutzman", "blog": "http://coenraets.org"},
            {"id": 2, "firstName": "Brian", "lastName": "Glover", "managerId": 1, "managerName": "Erik Egbertson", "reports": 2, "title": "UX Designer", "department": "UX", "mobilePhone": "617-000-0002", "officePhone": "781-000-0002", "email": "brian.glover@endurance.com", "city": "Austin, TX", "pic": "brian_glover.jpg", "twitterId": "@bglover", "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "David", "lastName": "Lewallen", "managerId": 1, "managerName": "Chris Pond", "reports": 0, "title": "Front-End Developer", "department": "Engineering", "mobilePhone": "617-000-0003", "officePhone": "781-000-0003", "email": "david.lewallen@endurance.com", "city": "Austin, TX", "pic": "david_lewallen.jpg", "twitterId": "@dlewallen", "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "Katie", "lastName": "Robblee", "managerId": 1, "managerName": "N/A", "reports": 3, "title": "Project Manager", "department": "Project Management", "mobilePhone": "617-000-0004", "officePhone": "781-000-0004", "email": "katie.robblee@endurance.com", "city": "Burlington, MA", "pic": "katie_robblee.jpg", "twitterId": "@krobblee", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "Kevin", "lastName": "Reynolds", "managerId": 1, "managerName": "Nate Lewis", "reports": 1, "title": "Front-End Developer", "department": "Engineering", "mobilePhone": "617-000-0005", "officePhone": "781-000-0005", "email": "kevin.reynolds@endurance.com", "city": "Boston, MA", "pic": "kevin_reynolds.jpg", "twitterId": "@kreynolds", "blog": "http://coenraets.org"},
            {"id": 6, "firstName": "Jason", "lastName": "Fragosa", "managerId": 4, "managerName": "Rob Rossler", "reports": 0, "title": "Product Owner", "department": "Product", "mobilePhone": "617-000-0006", "officePhone": "781-000-0006", "email": "jason.fragosa@endurance.com", "city": "Boston, MA", "pic": "jason_fragosa.jpg", "twitterId": "@jfragosa", "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "Chris", "lastName": "Pond", "managerId": 4, "managerName": "Rob Rossler", "reports": 0, "title": "Front-End Lead", "department": "Engineering", "mobilePhone": "617-000-0007", "officePhone": "781-000-0007", "email": "chris.pond@endurance.com", "city": "Austin, TX", "pic": "chris_pond.jpg", "twitterId": "@cpond", "blog": "http://coenraets.org"},
            {"id": 8, "firstName": "Lexy", "lastName": "Derosa", "managerId": 2, "managerName": "Julie Taylor", "reports": 0, "title": "Senior Designer", "department": "Studio", "mobilePhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lexy.derosa@endurance.com", "city": "Boston, MA", "pic": "lexy_derosa.jpg", "twitterId": "@lexyderosa", "blog": "http://coenraets.org"},
            {"id": 9, "firstName": "Nate", "lastName": "Lewis", "managerId": 2, "managerName": "N/A", "reports": 0, "title": "Engineering Lead", "department": "Engineering", "mobilePhone": "617-000-0009", "officePhone": "781-000-0009", "email": "nate.lewis@endurance.com", "city": "Boston, MA", "pic": "nate_lewis.jpg", "twitterId": "@nlewis", "blog": "http://coenraets.org"},
            {"id": 10, "firstName": "Tyler", "lastName": "Wetzel", "managerId": 5, "managerName": "Joe Stutzman", "reports": 0, "title": "Designer", "department": "Studio", "mobilePhone": "617-000-0010", "officePhone": "781-000-0010", "email": "tyler.wetzel@endurance.com", "city": "Austin, TX", "pic": "tyler_wetzel.jpg", "twitterId": "@twetzel", "blog": "http://coenraets.org"},
            {"id": 11, "firstName": "Ryan", "lastName": "Van Eck", "managerId": 5, "managerName": "Chris Pond", "reports": 0, "title": "Front-End Developer", "department": "Engineering", "mobilePhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ryan.vaneck@endurance.com", "city": "Austin, TX", "pic": "ryan_vaneck.jpg", "twitterId": "@rvaneck", "blog": "http://coenraets.org"},
            {"id": 12, "firstName": "Zak", "lastName": "Weiland", "managerId": 1, "managerName": "Erik Egbertson", "reports": 0, "title": "Product Designer", "department": "UX", "mobilePhone": "617-000-0012", "officePhone": "781-000-0012", "email": "zak.weiland@endurance.com", "city": "Austin, TX", "pic": "zak_weiland.jpg", "twitterId": "@zweiland", "blog": "http://coenraets.com"}
        ];

    // The public API
    return {
        findById: findById,
        findByName: findByName,
        findByManager: findByManager
    };

}());

export default employeeService;

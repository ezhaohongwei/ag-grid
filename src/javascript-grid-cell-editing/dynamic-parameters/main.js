var columnDefs = [
    {field: 'name', width: 100},
    {
        field: 'gender',
        width: 90,
        cellRenderer: 'genderCellRenderer',
        cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: {
            values: ['Male', 'Female'],
            cellRenderer: 'genderCellRenderer'
        }
    },
    {
        field: 'country',
        width: 100,
        cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: {
            cellHeight: 50,
            values: ['Ireland', 'USA']
        }
    },
    {
        field: 'city', width: 70,
        cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: function (params) {
            var selectedCountry = params.data.country;
            var allowedCities = countyToCityMap[selectedCountry];
            return {
                values: allowedCities,
                formatValue: function (value) {
                    return value + ' (' + selectedCountry + ')';
                }
            };
        }
    },
    {field: 'address', width: 200, cellEditor: 'agLargeTextCellEditor'}
];

var rowData = [
    {
        name: 'Bob Harrison',
        gender: 'Male',
        address: '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address: '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address: '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address: '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Bob Harrison',
        gender: 'Male',
        address: '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address: '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address: '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address: '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Bob Harrison',
        gender: 'Male',
        address: '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address: '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address: '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address: '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Bob Harrison',
        gender: 'Male',
        address: '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address: '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address: '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address: '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Bob Harrison',
        gender: 'Male',
        address: '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address: '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address: '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address: '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Bob Harrison',
        gender: 'Male',
        address: '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address: '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address: '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address: '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland'
    },
];

var countyToCityMap = {
    'Ireland': ['Dublin', 'Cork', 'Galway'],
    'USA': ['New York', 'Los Angeles', 'Chicago', 'Houston']
};

var gridOptions = {
    components: {
        'genderCellRenderer': GenderCellRenderer
    },
    columnDefs: columnDefs,
    rowData: rowData,
    enableColResize: true,
    defaultColDef: {
        editable: true
    },
    onGridReady: function (params) {
        params.api.sizeColumnsToFit();
    },
    onCellValueChanged: function (params) {
        var colId = params.column.getId();
        if (colId === 'country') {

            var selectedCountry = params.data.country;
            var selectedCity = params.data.city;

            var allowedCities = countyToCityMap[selectedCountry];
            var cityMismatch = allowedCities.indexOf(selectedCity) < 0;

            if (cityMismatch) {
                params.node.setDataValue('city', null);
            }
        }
    }
};

function GenderCellRenderer() {
}

GenderCellRenderer.prototype.init = function (params) {
    this.eGui = document.createElement('span');
    var img = params.value === 'Male' ? 'male.png' : 'female.png';
    this.eGui.innerHTML = '<img src="../images/' + img + '"/> ' + params.value;
};

GenderCellRenderer.prototype.getGui = function () {
    return this.eGui;
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});

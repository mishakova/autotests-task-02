module.exports = function formatDate(date) {
	array = date.match(/\d+/g);
	dateNow = new Date();
	months = ["������", "�������", "�����", "������", "���", "����", "����", "�������", "��������", "�������", "������", "�������"];
	numberOfDayes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (array[0]>dateNow.getUTCFullYear()) throw new Error('Future year');
	if ((array[0]==dateNow.getUTCFullYear()) && (parseInt(array[1])>dateNow.getUTCMonth()+1)) throw new Error('Future month');
	if ((array[0]==dateNow.getUTCFullYear()) && (parseInt(array[1])==dateNow.getUTCMonth()+1) && (parseInt(array[2])> dateNow.getUTCDate())) throw new Error('Future day');
	if (parseInt(array[3])>24) throw new Error('Incorrect hours');
	if (parseInt(array[4])>60) throw new Error('Incorrect minutes');
	if (parseInt(array[2])> numberOfDayes[parseInt(array[1]-1)]) throw new Error('non-existent date');
	if (array[0] == dateNow.getUTCFullYear() && dateNow.getUTCMonth()+1==parseInt(array[1])){
		if (parseInt(array[2]) == dateNow.getUTCDate()) return array[3]+":"+array[4];
		else if (parseInt(array[2]) == dateNow.getUTCDate()-1) return "����� � "+array[3]+":"+array[4]; 
	}
	if (array[0] == dateNow.getUTCFullYear()) return parseInt(array[2])+" "+months[parseInt(array[1])-1]+" � "+array[3]+":"+array[4]; 
		else return parseInt(array[2])+" "+months[parseInt(array[1])-1]+" "+array[0]+" ����"+" � "+array[3]+":"+array[4];
};


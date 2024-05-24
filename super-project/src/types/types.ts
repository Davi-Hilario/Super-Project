export type ItemData = {
	id: number;
	title: string;
	icon: any;
	backgroundColor: string;
	foregroundColor: string;
	navigationUrl: string;
};

export type ProductData = {
	id?: number;
	name?: string;
	description?: string;
	price?: number;
	image?: string;
	pressed?: boolean;
};

export type UserData = {
	id?: number;
	name?: string;
	role?: number;
	email?: string;
	password?: string;
	image?: string;
	pressed?: boolean;
};

export default interface IRestProvider<T> {
	get(url: string): Promise<T>;

	delete(url: string): Promise<boolean>;

	create(url:string, model:T) : Promise<T>;
	edit(url:string, model:T) : Promise<T>;

	search(url: string,query: Object): Promise<T[]>;
}
import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserAction } from "../hooks/useUserAction";

export function CreateNewUser() {
    const { addUser } = useUserAction();
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const github = formData.get('github') as string;

        addUser({ name, email, github });
    }

    return (
        <Card>
            <Title>Create New User</Title>
            <form onSubmit={handleSubmit}>
                <TextInput
                    placeholder="Name"
                    name="name"
                />
                <TextInput
                    placeholder="Email"
                    name="email"
                />
                <TextInput
                    placeholder="GitHub"
                    name="github"
                />

                <div>
                    <Button type="submit">Create User</Button>
                </div>
            </form>
        </Card>
    );
}